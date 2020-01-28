// Rust CLI to publish draft posts
// Will replace src/global/articles.json
// Only publishes md files with published: true in metadata

// NOTE: Drafts posts have a boolean "published" not present in frontend

#[macro_use]
extern crate pest_derive;

use lazy_static::lazy_static;
use pest::Parser;

use std::{
  io::{self, ErrorKind},
  path::PathBuf,
  str::FromStr,
};

lazy_static! {
  static ref DRAFTS_DIR: PathBuf = {
    let mut r = PathBuf::new();
    r.push("drafts");
    r
  };
  static ref DESTINATION: PathBuf = {
    let mut r = PathBuf::new();
    r.push("src");
    r.push("global");
    r.push("articles.json");
    r
  };
}

#[derive(Parser)]
#[grammar = "draft.pest"]
struct DraftParser;

#[derive(Debug, Default, Clone, PartialEq)]
struct Draft {
  cover_image: Option<String>,
  description: Option<String>,
  date: String, // TODO
  markdown: String,
  published: bool,
  tags: Vec<String>,
  title: String,
}

impl FromStr for Draft {
  type Err = io::Error;
  fn from_str(s: &str) -> Result<Self, Self::Err> {
    let mut ret = Draft::default();

    // parse!
    match DraftParser::parse(Rule::draft, s) {
      Ok(success) => println!("{:?}", success),
      Err(e) => {
        return Err(io::Error::new(
          ErrorKind::InvalidInput,
          format!("Parse error: {}", e),
        ))
      }
    }

    Ok(ret)
  }
}

#[derive(Debug, Default, Clone, PartialEq)]
struct Posts {
  posts: Vec<Draft>,
}

fn main() {
  println!(
    "deciduously-com publish tool {}\nDrafts: {:?}\nDestination: {:?}",
    env!("CARGO_PKG_VERSION"),
    DRAFTS_DIR.as_os_str(),
    DESTINATION.as_os_str()
  );
}

#[cfg(test)]
mod test {
  use super::*;
  use pretty_assertions::assert_eq;
  #[test]
  fn test_read_draft() {
    let test = "---\ntitle: Test Post\ndescription: Some description\ntags: hello, everyone\npublished: false\ndate: 2020-01-31T11:00:00.000Z\n---\n\n# Some Markdown\n\nCool!";
    let expected = Draft {
      cover_image: None,
      description: Some("Some description".to_string()),
      date: "2020-01-31T11:00:00.000Z".to_string(),
      markdown: "# Some Markdown\n\nCool!".to_string(),
      published: false,
      tags: vec!["hello".to_string(), "everyone".to_string()],
      title: "Test Post".to_string(),
    };
    assert_eq!(Draft::from_str(test).unwrap(), expected)
  }
}
