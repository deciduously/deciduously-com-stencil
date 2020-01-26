// All logic for scraping posts
import * as postData from './assets/articles.json';

// Interfaces

export interface BlagPost {
  cover_image?: string;
  date: string;
  description: string;
  id: number;
  markdown: string;
  shortTitle?: string;
  tags: string; // TODO string[]
  title: string;
}

export class BlagPosts {
  private __posts: BlagPost[];
  constructor() {
    // Populate from articles.json
    this.__posts = [];
    for (const article of postData.posts) {
      this.__posts.push({ id: this.numPosts, ...article });
    }
  }
  get numPosts(): number {
    return this.posts.length;
  }
  get posts(): BlagPost[] {
    return this.__posts;
  }
  allArticleTitles(): [number, string][] {
    const ret = [];
    this.posts.forEach(post => {
      ret.push([post.id, post.title]);
    });
    return ret;
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
  date: 'NOPE',
  description: 'Nothing here, bud.',
  id: -99,
  markdown: '## You should try another link',
  shortTitle: 'Oops',
  tags: 'help',
  title: 'Unknown Post'
};
