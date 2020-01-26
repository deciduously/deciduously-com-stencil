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
}

export const blagPosts = new BlagPosts();
