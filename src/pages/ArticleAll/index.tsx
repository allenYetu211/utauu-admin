/**
 * @file: 所有文章
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import * as React from 'react';
import ContentHeaderComponent from '@/components/contentHeader/index';
import CardContainerComponent from '@/components/cardContainer/index';
import ArticleContainer from '@/components/articles';
import {getArticleAll} from '@/action/httpaction';
import {Link} from "react-router-dom";
import {IArticle} from '@/interfaces/interface';

interface IState {
  article : IArticle[]
}
export default class ArticleAllPages extends React.Component < any,
IState > {
  constructor(props:any) {
    super(props);
    this.state = {
      article: []
    }
  }

  public async componentDidMount() {
    const result = await getArticleAll()
    this.setState({article: result})
  }

  public render() {
    const {article} = this.state
    return (
      <div>

        <ContentHeaderComponent hideGoBack={true} title="所有文章">
          <button>
            <Link to="/article-create">新建文章</Link>
          </button>
        </ContentHeaderComponent>

        <div>
          <CardContainerComponent>
            <ArticleContainer article={article}/>
          </CardContainerComponent>
        </div>

      </div>
    )
  }
}