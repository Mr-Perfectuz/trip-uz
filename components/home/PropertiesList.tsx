import { PropertyCardProps } from '@/utils/types';
import PropertyCard from '../card/PropertyCard';

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <section>
      {properties.map((property) => {
        return <PropertyCard key={property.id} property={property} />;
      })}
    </section>
  );
}

export default PropertiesList;
