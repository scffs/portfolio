import React from 'react'
import ContentLoader from 'react-content-loader'

const ArticlesSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={props.width}
        height={props.height}
        viewBox="0 0 770 575"
        backgroundColor="#ffffff"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="45" ry="45" width="765" height="400" />
        <circle cx="11" cy="444" r="5" />
        <rect x="34" y="437" rx="12" ry="12" width="199" height="17" />
        <rect x="0" y="499" rx="7" ry="7" width="552" height="29" />
        <rect x="0" y="547" rx="10" ry="10" width="132" height="22" />
        <rect x="600" y="433" rx="14" ry="14" width="149" height="25" />
    </ContentLoader>
)

export default ArticlesSkeleton