import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
