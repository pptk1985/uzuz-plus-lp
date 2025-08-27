import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import BgImg from '@/public/images/uzuzlp/2273260509_1200x800.png';

export default function TabLayout1() {
  return (
    <div
      id="tablayout1"
      // h-dvhでビューポート高さを100%にする
      className="h-dvh bg-cover bg-center bg-cyan-500 bg-blend-overlay px-2 sm:px-20 pt-14 sm:pt-18 pb-14 sm:pb-18"
      style={{
        backgroundImage: `url(${BgImg.src})`,
      }}
    >
      <div className="flex justify-center items-center h-full max-w-5xl mx-auto">
        <Tabs defaultValue="tab1" className="w-full">
          <TabsList>
            <TabsTrigger value="tab1">タブ01</TabsTrigger>
            <TabsTrigger value="tab2">タブ02</TabsTrigger>
            <TabsTrigger value="tab3">タブ03</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="w-full h-[70dvh] bg-white/50">
              tab1のコンテンツtab1のコンテンツtab1のコンテンツtab1のコンテンツtab1のコンテンツtab1のコンテンツtab1のコンテンツtab1のコンテンツ
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="w-full h-[70dvh] bg-white/50">
              tab2のコンテンツtab2のコンテンツtab2のコンテンツtab2のコンテンツtab2のコンテンツtab2のコンテンツtab2のコンテンツtab2のコンテンツ
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div className="w-full h-[70dvh] bg-white/50">
              tab3のコンテンツtab3のコンテンツtab3のコンテンツtab3のコンテンツtab3のコンテンツtab3のコンテンツtab3のコンテンツtab3のコンテンツ
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
