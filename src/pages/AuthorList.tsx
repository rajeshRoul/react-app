import React, { ReactElement, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAuthors } from '../util/authorActions'
import NavBar from '../components/NavBar'
import Author from '../components/Author'
import '../styles/AuthorList.css'

function AuthorList(props: any): ReactElement {
    const { authorsData, fetchData } = props
    useEffect(() => {
        fetchData()
    }, [fetchData])
    // eslint-disable-next-line no-nested-ternary
    return authorsData.loading ? (
        <h2>Loading</h2>
    ) : authorsData.error ? (
        <h2>{authorsData.error}</h2>
    ) : (
        <div className="AuthorsPage">
            <NavBar />
            <div className="Authors">
                {authorsData &&
                    authorsData.authors &&
                    authorsData.authors.map((author: any) => (
                        <Author
                            key={author.id}
                            url={author.download_url}
                            name={author.author}
                        />
                    ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any): any => {
    return {
        authorsData: state,
    }
}

const mapDispatchToProps = (dispatch: any): any => {
    return {
        fetchData: () => dispatch(fetchAuthors()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorList)
