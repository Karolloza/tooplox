import React from "react";
import styled from 'styled-components'

import Input from '../components/input'
import ReposList from '../components/reposList'

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display:flex;
    justify-content: center;
`

const Index = () => (
    <Container>
        <Input />
        <ReposList />
    </Container>
)


export default Index