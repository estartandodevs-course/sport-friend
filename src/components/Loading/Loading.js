import React, { useState } from "react";
import { Ring } from "react-awesome-spinners";

const SFloading = () => {
    const [loading, setLoading] = useState(true)
      
    return (
        loading && <Ring />
    );
  }

  export default SFloading;