import { useState } from "react";

const useReload = () =>
{
    const [reload, setReload] = useState(false);

    return { reload, setReload };
}

export default useReload;