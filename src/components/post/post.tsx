import { Component, Prop, State, getAssetPath, h } from '@stencil/core';
import showdown from 'showdown';

@Component({
  assetsDir: './posts',
  tag: 'app-post',
  styleUrl: 'post.css',
  shadow: true
})
export class Post {
  @Prop() match; // MatchResults
  @State() postHTML = '<h1>NOT FOUND</h1>';
  componentWillLoad() {
    fetch(getAssetPath(`./posts/${this.match.params.postId}.md`))
      .then(response => response.text())
      .then(txt => {
        const converter = new showdown.Converter(),
          text = txt,
          html = converter.makeHtml(text);
        this.postHTML = html;
      });
  }
  render() {
    return <main innerHTML={this.postHTML} />;
  }
}
