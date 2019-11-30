import React, { useState } from "react";
import { Ring } from "react-awesome-spinners";
import './loading.scss';
const Loading = () => {
    const [loading, setLoading] = useState(true)
      
    return (
        loading && <Ring />
    );
  }

  export default Loading; 