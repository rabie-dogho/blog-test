import React from 'react'
import ArticlesList from '../../components/organisms/articles/ArticlesList'
import HeaderOneColumn from '../../components/templates/HeaderOneColumn'
import withAuthSync from '../../services/withAuthSync'
// import PropTypes from 'prop-types'

const ArticlesPage = () => (
        <HeaderOneColumn>
            <ArticlesList/>
        </HeaderOneColumn>
    )

ArticlesPage.propTypes = {

}

export default  withAuthSync(ArticlesPage)
