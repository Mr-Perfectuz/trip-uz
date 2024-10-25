import { createClient } from '@supabase/supabase-js';

const bucket = 'trip-uz';
const url = process.env.SUPERBASE_URL as string;
const key = process.env.SUPERBASE_KEY as string;

const superbse = createClient(url, key);
export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;

  const { data } = await superbse.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '3600' });
  if (!data) throw new Error('Image upload if failed !');
  return superbse.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
