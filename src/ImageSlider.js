import { Component } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

class ImageSlider extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex : 0,
      goToPrevious : () => {
        const isFirstSlide = this.state.currentIndex === 0;
        const newIndex = isFirstSlide ? this.props.slides.length - 1 : this.state.currentIndex - 1;
        //setCurrentIndex(newIndex);
        //this.state.currentIndex = newIndex
        this.setState({currentIndex : newIndex})
      },
      goToNext : () => {
        const isLastSlide = this.state.currentIndex === this.props.slides.length - 1;
        const newIndex = isLastSlide ? 0 : this.state.currentIndex + 1;
        //setCurrentIndex(newIndex);
        //this.state.currentIndex = newIndex
        this.setState({currentIndex : newIndex})
        console.log("--->  "+ this.state.currentIndex)
      },
      goToSlide : (slideIndex) => {
        //setCurrentIndex(slideIndex);
        //this.state.currentIndex = slideIndex
        this.setState({currentIndex : slideIndex})
      },
      slideStylesWidthBackground : (index) => {
          return {
            ...slideStyles,
            backgroundImage: `url(${this.props.slides[index].url})`
          }
      }
    }
  }
  
  render() {
    return (
      <div style={sliderStyles}>
        <div>
          <div onClick={this.state.goToPrevious} style={leftArrowStyles}>
            ❰
          </div>
          <div onClick={this.state.goToNext} style={rightArrowStyles}>
            ❱
          </div>
        </div>
        <div style={this.state.slideStylesWidthBackground(this.state.currentIndex)}></div>
        <div style={dotsContainerStyles}>
          {this.props.slides.map((slide, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => this.state.goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageSlider;
