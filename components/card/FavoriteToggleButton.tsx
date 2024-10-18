/* eslint-disable @typescript-eslint/no-unused-vars */
import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavouriteToggleForm from "./FavouriteToggleForm";
import { redirect } from "next/dist/server/api-utils";

async function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
  const { userId } = auth();
  if (!userId) {
    return <CardSignInButton />;
  }
  const favoriteId = await fetchFavoriteId({ propertyId });
  return (
    <FavouriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />
  );
}
export default FavoriteToggleButton;
