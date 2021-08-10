/* eslint-disable no-nested-ternary */
import React, { ReactElement, useEffect, useContext, Suspense } from 'react'
import { connect } from 'react-redux'
import { fetchAuthors } from '../../util/Redux/authorActions'
import Author from '../../components/Author/Author'
import './AuthorList.css'
import { ThemeContext } from '../../util/themeContext'

const NavBar = React.lazy(() => import('../../components/NavBar/NavBar'))

function AuthorList(props: any): ReactElement {
    const { authorsData, fetchData } = props
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        fetchData()
    }, [fetchData])
    return (
        <div className={`AuthorsPage ${theme === 'Dark' && 'DarkAuthorPage'}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <NavBar />
            </Suspense>
            {authorsData.loading ? (
                <h2>Loading</h2>
            ) : authorsData.error ? (
                <h2>{authorsData.error}</h2>
            ) : (
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
            )}
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
