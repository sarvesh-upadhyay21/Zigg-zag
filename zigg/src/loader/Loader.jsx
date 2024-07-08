import React from "react";
import style from './Loader.module.css'

import { Spinner } from "reactstrap";

export default function () {
  return (
    <>
     
     <div className={style.overlay}>
          <div className={style.loader}>
            <Spinner color="" size="lg"  />
          </div>
        </div>
     
    </>
  );
}

