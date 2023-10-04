import React, { Component } from 'react'

export default class OneSection extends Component {
  render() {
    return (
			<>
				<section className={`${this.props.number}-hightlight-wrapper`}>
					<div className={this.props.container}>
						<div className={this.props.new}>New</div>

						<div className={this.props.titlee}>{this.props.title}</div>

						<div className="links-wrapper">
							{/* <Footer abebe={kebede} /> */}
						</div>

						{/* <div className={this.props.caption}>
							<div className="col-sm-12 col-md-6 text-md-right">
								{this.props.resl
                                caption}
							</div>
							<div className="col-sm-12 col-md-6 text-md-left">
								Magic Keyboard coming in May
							</div>
						</div> */}
					</div>
				</section>
			</>
		);
  }
}
