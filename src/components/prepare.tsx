import { Card, CardContent } from "@/components/ui/card";

export default function MarblingInstructions() {
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

  return (
    <div className="mx-auto p-4 md:p-6">
      <Card>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-sky-600 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-2 before:bg-sky-600">
                用意するもの
              </h2>
              <ul className="space-y-4">
                {materials.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <div className="flex-none">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white">
                        {item.id}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3]">
              <img
                src="https://placehold.jp/64/c0c0c0/ffffff/800x600.png"
                alt="マーブリング用具の配置図"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
