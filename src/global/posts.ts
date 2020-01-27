// All logic for scraping posts
import { BlagPost } from './interfaces';
import * as postData from './articles.json';

export class BlagPosts {
  private __posts: BlagPost[];
  constructor() {
    // Populate from articles.json
    this.__posts = [];
    for (const article of postData.posts) {
      this.__posts.push({
        id: this.numPosts,
        date: new Date(article.date),
        cover_image: article.cover_image,
        description: article.description,
        markdown: article.markdown,
        title: article.title,
        tags: article.tags
      });
    }
  }
  get numPosts(): number {
    return this.posts.length;
  }
  get posts(): BlagPost[] {
    return this.__posts;
  }
  allArticles(): BlagPost[] {
    return this.posts;
  }
  getPostByID(id: number): BlagPost | false {
    for (const p of this.posts) {
      if (p.id === id) return p;
    }
    return false;
  }
}

export const blagPosts = new BlagPosts();

export const notFound: BlagPost = {
  date: new Date(),
  description: 'Nothing here, bud.',
  id: -99,
  markdown: '## You should try another link',
  shortTitle: 'Oops',
  tags: 'help',
  title: 'Unknown Post'
};
