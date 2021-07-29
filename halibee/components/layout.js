import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>HaLiBee</title>
            </Head>
            <AppBar position='static'>
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
