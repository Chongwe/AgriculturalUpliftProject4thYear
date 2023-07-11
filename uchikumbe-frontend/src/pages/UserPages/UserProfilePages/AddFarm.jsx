import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";

/**
 * The AddFarm component represents the page for adding farm information.
 *
 * @component
 * @category Pages
 * @subcategory UserProfilePages
 */
function AddFarm() {
  return (
    <div className=" p-4 lg:flex-row shadow-lg rounded-3xl my-4 min-w-[400px] justify-center gap-24 lg:flex flex-col  mx-12 items-center">
      <div className="">
        <div className=" flex flex-wrap gap-4">
          <FontAwesomeIcon
            icon={faUserEdit}
            className="text-goldenrod "
            size="2x"
          />
          <Typography variant="h4" className="text-goldenrod ">
            Add your farm
          </Typography>
        </div>
        <Typography color="gray" className="mt-1 text-green-900 font-normal">
          Add farm information
        </Typography>
      </div>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 lg:flex-row lg:flex flex-col gap-6">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" color="green" label="Farm Name" />
          <Input size="lg" color="green" label="Location" />

          <Select label="Select animal" size="lg">
            <Option>Cattle</Option>
            <Option>Goat</Option>
            <Option>Chicken</Option>
          </Select>
          <Select label="Select crop" size="lg">
            <Option>Maize</Option>
            <Option>Beans</Option>
            <Option>Groundnuts</Option>
          </Select>
        </div>
        <div className="mb-4 flex flex-col gap-6">
          <Textarea color="green" label="Tell us about your farm" />
          <Input size="lg" color="green" label="Size of farm" />

          <Button color="green" className="mt-6 rounded-full" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
export default AddFarm;
