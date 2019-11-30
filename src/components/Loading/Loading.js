import React, { useState } from "react";
import { Ring } from "react-awesome-spinners";
const Loading = () => {
    const [loading, setLoading] = useState(true)
      
    return (
        loading && <Ring />
    );
  }

  export default Loading; 