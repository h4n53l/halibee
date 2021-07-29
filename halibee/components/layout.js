import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'

const Layout = ({children}) => {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>HaLiBee</title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography>HaLiBee</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>All rights reserved. HaLiBee</Typography>
            </footer>
        </div>
    )
}

export default Layout
