import React from "react";
import "../src/Demo.css";

interface ClassProfilePicProps {
  changeImage: number;
}

interface ClassProfilePicState {
  image: string;
}

export class ClassProfilePic extends React.Component<
  ClassProfilePicProps,
  ClassProfilePicState
> {
  public constructor(props: ClassProfilePicProps) {
    super(props);
    this.state = {
      image: ""
    };
  }

  private fetchImage() {
    fetch("https://picsum.photos/200")
      .then((payload: any) => {
        this.setState({
          image: payload.url
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  public componentDidMount() {
    this.fetchImage();
  }

  public componentWillUnmount() {
    console.log("componentwillunmount");
  }

  public componentDidUpdate(prevProps: ClassProfilePicProps) {
    if (this.props.changeImage !== prevProps.changeImage) {
      this.fetchImage();
    }
  }

  public render() {
    return (
      <div>
        <img src={this.state.image} alt="Random" className="ext-image-margin" />
      </div>
    );
  }
}
