import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/Categories";
import TextAreaInput from "@/components/form/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import ImageInput from "@/components/form/ImageInput";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitilize">
        Create property
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="Name (20 imit)"
              defaultValue="Cabin in Latvia "
            />
            <FormInput
              name="tagline"
              type="text"
              label="Name (30 imit)"
              defaultValue="Dream Getaway awaits you here"
            />
            <PriceInput />
            <CategoriesInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="Description (10 - 1000 words)"
          />
          <div className="grid sm:grid-cols-2 gap-8 mt-4">
            <CountriesInput />
            <ImageInput />
          </div>
          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreatePropertyPage;
