import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Plus, Trash2, MapPin } from "lucide-react";

interface AddRouteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddRouteModal({ isOpen, onClose }: AddRouteModalProps) {
  const [routeName, setRouteName] = useState("");
  const [stations, setStations] = useState<string[]>(["", ""]); // Start with 2 empty stations

  const handleAddStation = () => {
    setStations([...stations, ""]);
  };

  const handleRemoveStation = (index: number) => {
    if (stations.length > 2) {
      const newStations = stations.filter((_, i) => i !== index);
      setStations(newStations);
    }
  };

  const handleStationChange = (index: number, value: string) => {
    const newStations = [...stations];
    newStations[index] = value;
    setStations(newStations);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ routeName, stations });
    onClose();
    // Reset form
    setRouteName("");
    setStations(["", ""]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="إضافة خط جديد">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="routeName" className="text-sm font-medium text-gray-700">
            اسم الخط
          </label>
          <input
            id="routeName"
            type="text"
            value={routeName}
            onChange={(e) => setRouteName(e.target.value)}
            placeholder="مثال: القاهرة - الإسكندرية"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700 block">
            المحطات
          </label>
          <div className="space-y-3">
            {stations.map((station, index) => (
              <div key={index} className="flex gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <MapPin className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={station}
                    onChange={(e) => handleStationChange(index, e.target.value)}
                    placeholder={`المحطة ${index + 1}`}
                    className="w-full pr-9 pl-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                {stations.length > 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleRemoveStation(index)}
                    className="px-3 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={handleAddStation}
            className="w-full border-dashed border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600"
          >
            <Plus className="h-4 w-4 ml-2" />
            إضافة محطة
          </Button>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <Button type="button" variant="outline" onClick={onClose}>
            إلغاء
          </Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            حفظ الخط
          </Button>
        </div>
      </form>
    </Modal>
  );
}
