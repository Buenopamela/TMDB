import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { FormStyle, ContainerInput ,Input} from './styles';

const Search = () => {

  
  return (
    <FormStyle  >
      <ContainerInput>
      <FaSearch/>
      <Input type="text" placeholder='Search...'   />
      </ContainerInput>
    </FormStyle>
  )
}

export default Search;