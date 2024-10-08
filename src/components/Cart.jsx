import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
//

export default function Cart({ i, name, description }) {
  //

  return (
    <>
      <Card className="relative w-72 bg-white h-[545px] m-auto shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl dark:bg-[#151725] my-2">
        <CardHeader
          shadow={false}
          floated={false}
          className="h-100 relative dark:bg-[#242635]"
        >
          <img
            // http://localhost:3001/uploads/image-1704202756669.png
            src={`/assets/homepage/product-${i + 1}.jpg`}
            alt={`product-${i + 1}`}
            className="h-[256px] w-[256px] object-cover z-10"
          />
        </CardHeader>

        <Link to={`/products/${i + 1}`}>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography
                color="blue-gray"
                className="font-medium dark:text-white"
              >
                {name}
              </Typography>
              {/* <Typography
                color="blue-gray"
                className="font-medium ml-6 dark:text-white"
              >
                
              </Typography> */}
            </div>
            <div
              style={{ maxHeight: "5rem", overflow: "hidden" }}
              className="mb-2"
            >
              <Typography
                variant="small"
                color="gray"
                className="font-normal opacity-75 dark:text-white"
              >
                {description}
              </Typography>
            </div>
          </CardBody>
        </Link>
        <CardFooter className="pt-0">
          <Link
            to={`/products/${i + 1}`}
            className="block w-full text-center p-2 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-700 absolute bottom-0 left-0 transform -translate-y-1"
            // disabled={!countInStock}
          >
            text
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
