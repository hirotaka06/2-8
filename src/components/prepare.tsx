import { Card, CardContent } from "@/components/ui/card";
import Image from "@/assets/image.png";

function renderMaterialItem(item: { id: number; name: string; description?: string }) {
  return (
    <li key={item.id} className="flex space-x-3">
      <div>
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white">
          {item.id}
        </span>
      </div>
      <div>
        <p>{item.name}</p>
        {item.description && (
          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
        )}
      </div>
    </li>
  );
}

export default function Prepare() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <h2 className="pl-4 border-l-8 border-sky-600 text-2xl font-bold text-sky-600">
              用意するもの
            </h2>
            <ul className="space-y-3">{materials.map(renderMaterialItem)}</ul>
          </div>
          <div className="relative aspect-[4/3]">
            <img
              src={Image}
              alt="マーブリング用具の配置図"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const materials = [
  {
    id: 1,
    name: "カラーマーブリング用の絵の具",
    description: "(画材屋や文ぼう具店に売っている)",
  },
  {
    id: 2,
    name: "台所用バット",
  },
  {
    id: 3,
    name: "画用紙",
    description:
      "(バットよりひと回り小さいサイズのもの。つやがなく、表面がつるつるしていない紙)",
  },
  {
    id: 4,
    name: "つまようじ",
  },
  {
    id: 5,
    name: "食器用洗ざい",
    description: "(界面活性ざいをふくむもの)",
  },
  {
    id: 6,
    name: "ティッシュペーパー",
  },
  {
    id: 7,
    name: "筆",
  },
  {
    id: 8,
    name: "水",
  },
  {
    id: 9,
    name: "コップやプリンカップ",
  },
];
