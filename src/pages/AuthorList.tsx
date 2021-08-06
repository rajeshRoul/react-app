import React, { ReactElement, useEffect, useContext } from 'react'
import { connect } from 'react-redux'
import { fetchAuthors } from '../util/Redux/authorActions'
import NavBar from '../components/NavBar'
import Author from '../components/Author'
import '../styles/AuthorList.css'
import { ThemeContext } from '../util/themeContext'

function AuthorList(props: any): ReactElement {
    const { authorsData, fetchData } = props
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        fetchData()
    }, [fetchData])
    // eslint-disable-next-line no-nested-ternary
    return authorsData.loading ? (
        <div className={`AuthorsPage ${theme === 'Dark' && 'DarkAuthorPage'}`}>
            <NavBar />
            <h2>Loading</h2>
        </div>
    ) : authorsData.error ? (
        <div className={`AuthorsPage ${theme === 'Dark' && 'DarkAuthorPage'}`}>
            <NavBar />
            <h2>{authorsData.error}</h2>
        </div>
    ) : (
        <div className={`AuthorsPage ${theme === 'Dark' && 'DarkAuthorPage'}`}>
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
