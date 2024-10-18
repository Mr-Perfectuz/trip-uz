import Image from "next/image";
import Link from "next/link";
import CountryFlagAndName from "./CountryFlagAndName";
import PropertyRating from "./PropertyRating";
import { PropertyCardProps } from "@/utils/types";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavouriteToggleButton";

function PropertyCard({ property }: { property: PropertyCardProps }) {
  const { name, image, price } = property;
  const { country, id: propertyId, tagline } = property;
  return (
    <article className="group relative">
      <Link href={`/properties/${propertyId}`}>
        <div className="relative h-[300px] mb-2 overflow-hidden rounded-md">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vs, 50vs"
            className="rounded-md object-cover transform group-hover:scale-110 transition-transform duration-500"
          ></Image>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold mt-1">
            {name.substring(0, 30)}
          </h3>
          <PropertyRating inPage={false} propertyId={propertyId} />
          {/* property rating */}
        </div>
        <p className="text-sm mt-1 text-muted-foreground">
          {tagline.substring(0, 40)}
        </p>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm mt-1">
            <span className="font-semibold">{formatCurrency(price)} night</span>
          </p>
          <CountryFlagAndName countryCode={country} />
        </div>
        <div className="absolute top-5 right-5 z-5">
          <FavoriteToggleButton propertyId={propertyId} />
        </div>
      </Link>
    </article>
  );
}

export default PropertyCard;
