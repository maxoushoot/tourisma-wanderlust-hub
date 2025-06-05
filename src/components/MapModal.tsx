import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface MapModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  location: string;
}

const MapModal = ({ open, onOpenChange, location }: MapModalProps) => {
  const encoded = encodeURIComponent(location);
  const mapUrl = `https://www.google.com/maps?q=${encoded}&output=embed`;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{location}</DialogTitle>
        </DialogHeader>
        <iframe
          title="map"
          src={mapUrl}
          className="w-full h-96 border-0"
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  );
};

export default MapModal;
