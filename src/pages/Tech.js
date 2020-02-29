import React from 'react';
import Omni from '../components/Omni';
import { motion } from 'framer-motion';

class Tech extends React.Component {
  constructor(props) {
    super(props);
    this.skills = props.skills;
  }

  render() {
    return (

      <div>
        <motion.div exit={{ opacity: 0 }} animate={{
                    x: 0,
                    backgroundColor: "#48b1bf",
                    boxShadow: "30px 30px 0 rgba(0, 0, 0, 2)",
                    position: "relative",
                }}>
        <Omni title={this.props.title} />
        <section className="p-3 p-lg-5 d-flex align-items-center" id="tech">
          <div className="w-100">
            <div className="subheading mb-3 font-weight-bolder">Programming Languages &amp; Tools</div>
            <div className="row">
              {
                this.skills.map((data, index) => (
                  <div key={index} className="col-6">
                    <p className="list-item">
                      <i className="fas fa-check-circle" style={{color:'blue'}}></i>
                      <span className="ml-3 font-weight normal">{data.name}</span>
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        </motion.div>
      </div>

    );
  }
}

export default Tech;
