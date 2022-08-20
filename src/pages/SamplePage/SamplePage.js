import React from "react";

class SamplePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="w-full flex items-center justify-center my-12">
          <div className="absolute top-40 lg:top-32 bg-white shadow rounded py-12 lg:px-28 px-8">
            {/* Enter code */}
            <div><p>This is the sample code</p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SamplePage;
