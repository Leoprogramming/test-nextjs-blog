import React from "react"
import fs from "fs"

const Post = () => {
    return <div>Hello World!</div>
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts")
    console.log("files: ", files)
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))
    console.log("paths: ", paths)

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async () => {
    return {
        props: {

        }
    }
}

export default Post