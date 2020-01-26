import { Component, Prop, h } from '@stencil/core';
import showdown from 'showdown';
import { BlagPost } from '../../global/interfaces';
import { blagPosts, notFound } from '../../global/posts';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-post',
  styleUrl: 'post.css',
  shadow: true
})
export class Post {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults; // MatchResults
  @Prop() blagPost: BlagPost =
    blagPosts.getPostByID(Number(this.match.params.postId)) || notFound;

  renderMarkdown() {
    const converter = new showdown.Converter(),
      text = this.blagPost.markdown,
      html = converter.makeHtml(text);
    return html;
  }
  render() {
    return <main innerHTML={this.renderMarkdown()} />;
  }
}
