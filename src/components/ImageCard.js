import { Component, createRef } from 'react'

class ImageCard extends Component {
    constructor(props) {
        super(props)

        this.state = { spans: 0 }
        this.imageRef = createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight
        const spans = Math.ceil(height / 10)

        this.setState({ spans })
    }

    render() {
        const { urls, alt_description } = this.props.image

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
            </div>
        )
    }
}

export default ImageCard