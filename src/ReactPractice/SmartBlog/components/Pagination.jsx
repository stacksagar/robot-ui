import React, { Component } from "react";

export default class Pagination extends Component {
  state = {
    isEditable: false,
  };

  render() {
    const {
      currentPage,
      totalPage,
      isNext,
      isPrevious,
      next,
      previous,
    } = this.props;
    return (
      <div className="d-flex py-5 align-items-center justify-content-between">
        <button
          onClick={() => previous()}
          disabled={!isPrevious}
          className="btn btn-secondary"
        >
          Previous
        </button>
        {this.state.isEditable ? (
          <input
						onChange={(e) => this.props.pageChangeHandler(e.target.value)}
						onKeyPress={(e)=>{
							if (e.key === 'Enter') {
								this.props.jumpPage()
								this.setState({ isEditable: false})
							}
						}}
            value={currentPage}
            type="number"
            className="form-control form-control-sm w-25"
          />
        ) : (
          <p
            onDoubleClick={() =>
              this.setState({ isEditable: !this.state.isEditable })
            }
            style={{ cursor: "pointer" }}
            className="m-0 text-warning text-center"
          >
            <strong className="text-white d-block">
              {currentPage} of {totalPage}
            </strong>
            <small>Double Click To Edit!</small>{" "}
          </p>
        )}
        <button
          onClick={() => next()}
          disabled={!isNext}
          className="btn btn-secondary"
        >
          Next
        </button>
      </div>
    );
  }
}
