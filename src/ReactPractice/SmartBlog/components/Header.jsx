import React, { Component } from "react";
import { newsCategory } from "./news";
class Header extends Component {
  state = {
    searchTerm: "",
  };
  changeSearchTerm = (e) => this.setState({ searchTerm: e.target.value });

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.search(this.state.searchTerm);
    }
  };

  render() {
    const {
      currentPage,
      totalPage,
      totalResults,
      changeCategory,
      getRef,
    } = this.props;
    return (
      <>
        <h3 className="text-info pt-2">
          World Top <b className="text-warning">News</b> HeadLines
        </h3>
        <input
          ref={getRef}
          onChange={this.changeSearchTerm}
          value={this.state.searchTerm}
          onKeyPress={this.handleKeyPress}
          type="search"
          placeholder="Search news, internet, health, microsoft...."
          className="form-control form-control-sm my-3"
        />
        {Object.keys(newsCategory).map((category, i) => (
          <button
            key={i}
            onClick={() => changeCategory(newsCategory[category])}
            className={`btn btn-sm mr-2 mb-2 ${
              this.props.category === newsCategory[category]
                ? "btn-warning"
                : "btn-info"
            }`}
          >
            #{category}
          </button>
        ))}
        <div className="d-flex px-md-4 w-100 text-warning justify-content-between align-items-center">
          <span>About {totalResults ? totalResults : 0} Results Found!</span>
          <span>
            {currentPage ? currentPage : 0} page of {totalPage ? totalPage : 0}
          </span>
        </div>
      </>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <Header {...props} getRef={ref} />
));
