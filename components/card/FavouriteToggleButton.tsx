import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FavoriteToggleButton({ propertyId }: { propertyId: string }) {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
export default FavoriteToggleButton;
