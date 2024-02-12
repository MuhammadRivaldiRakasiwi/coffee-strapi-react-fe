import axios from "axios";

export const getHomeImage = async () => {
    try {
        const data = await axios.get(
            `${process.env.REACT_APP_BASEURL}/home-images/?populate=*`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
                }
            }
        )
        return data;
    } catch (error) {
        return this.setState({ error });
    }
}

export const getHomeText = async () => {
    try {
        const data = await axios.get(
            `${process.env.REACT_APP_BASEURL}/home-texts/?populate=*`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
                }
            }
        )
        return data;
    } catch (error) {
        return this.setState({ error });
    }
}

export const getProducts = async () => {
    try {
        const data = await axios.get(
            `${process.env.REACT_APP_BASEURL}/products/?populate=*`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
                }
            }
        )
        return data;
    } catch (error) {
        return this.setState({ error });
    }
}