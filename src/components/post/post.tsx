import { Component, Prop, h } from '@stencil/core';
import showdown from 'showdown';
import { BlagPost } from '../../global/interfaces';
import { blagPosts, notFound } from '../../global/posts';
import { MatchResults, RouterHistory } from '@stencil/router';
import hljs from 'highlight.js';

@Component({
  tag: 'app-post',
  styleUrl: 'ocean.css',
  shadow: true
})
export class Post {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults; // MatchResults
  @Prop() blagPost: BlagPost =
    blagPosts.getPostByID(Number(this.match.params.postId)) || notFound;

  componentDidLoad() {
    document
      .querySelector('app-root')
      .shadowRoot.querySelector('app-post')
      .shadowRoot.querySelectorAll('pre code')
      .forEach(codeBlock => {
        console.log(codeBlock.toString());
        hljs.highlightBlock(codeBlock);
      });
  }

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
