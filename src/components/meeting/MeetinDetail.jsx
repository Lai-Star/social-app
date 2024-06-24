import * as React from 'react';

export default function MeetinDetail() {
  return (
    <div className="flex flex-col py-8 mx-auto w-full bg-white shadow-sm max-w-[480px]">
      <div className="flex flex-col px-8 w-full">
        <div className="flex gap-5 justify-between w-full whitespace-nowrap">
          <div className="flex gap-1 my-auto">
            <div className="grow my-auto text-2xl font-bold leading-9 text-zinc-900">
              Participants
            </div>
            <div className="flex flex-col justify-center text-xs leading-5 text-cyan-500 bg-black bg-opacity-0">
              <div className="justify-center py-2.5 bg-cyan-50 rounded-xl">
                4
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 rounded border border-blue-600 border-solid aspect-[2.04] w-[73px]"
          />
        </div>
        <div className="flex gap-5 justify-between mt-8">
          <div className="flex flex-col text-sm leading-5 text-zinc-900">
            <div className="flex gap-2">
              <img
                loading="lazy"
                srcSet="./img/avatars/11.png"
                className="shrink-0 w-9 aspect-square rounded-full"
              />
              <div className="flex-auto my-auto">Benjamin Crawford</div>
            </div>
            <div className="flex gap-2 mt-4">
              <img
                loading="lazy"
                srcSet="./img/avatars/9.png"
                className="shrink-0 w-9 aspect-square rounded-full"
              />
              <div className="flex-auto my-auto">Christian Scott</div>
            </div>
            <div className="flex gap-2 mt-4">
              <img
                loading="lazy"
                srcSet="./img/avatars/10.png"
                className="shrink-0 w-9 aspect-square rounded-full"
              />
              <div className="flex-auto my-auto">Deborah Chu</div>
            </div>
            <div className="flex gap-2 mt-4">
              <img
                loading="lazy"
                srcSet="./img/avatars/6.png"
                className="shrink-0 w-9 aspect-square rounded-full"
              />
              <div className="flex-auto my-auto">Jordan Nieves</div>
            </div>
          </div>
          <div className="flex flex-col my-auto">
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1829d1b569cad495a512f3aa2a11419a9ce0c85aa199299dae911afc7914d655?"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/669fa6fc0ed5f65aaf7126da21fe408f303dcfb9f4ce833fa41c8aa48f41d290?"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5efc071fe9bbb31025a3e1b8927dacd3a98abaadd8081703d6e771f20af347d2?"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
            <div className="flex gap-2 mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c879a04edc5941567dd0387549e6f9a329c57bdef688cdce28fa130c5100a8a?"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/669fa6fc0ed5f65aaf7126da21fe408f303dcfb9f4ce833fa41c8aa48f41d290?"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5efc071fe9bbb31025a3e1b8927dacd3a98abaadd8081703d6e771f20af347d2?"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
            <div className="flex gap-2 mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef6da0f0db0415211551742696364728e6afe562cfc2cb3786955912f52fab9?"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/832f863062c287ccfcfd766b6200daa634cff8cf41911ce42f5123cda0fb4211?"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5efc071fe9bbb31025a3e1b8927dacd3a98abaadd8081703d6e771f20af347d2?"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
            <div className="flex gap-2 mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dee7192ab55ea3f569f93a36c63f69783af0106da3d359a494143d506f97967d?"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/832f863062c287ccfcfd766b6200daa634cff8cf41911ce42f5123cda0fb4211?"
                className="shrink-0 w-5 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5efc071fe9bbb31025a3e1b8927dacd3a98abaadd8081703d6e771f20af347d2?"
                className="shrink-0 w-5 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c7c0e3eb60329db3c386c01c86eccaac6a89d6ba26696e1f8062798dda9722e?"
        className="self-center mt-8 w-full border border-gray-200 border-solid max-w-[400px] stroke-[1px] stroke-gray-200"
      />
      <div className="flex flex-col px-7 mt-10 w-full">
        <div className="text-2xl font-bold leading-9 text-zinc-900">Chat</div>
        <div className="flex gap-2.5 items-center mt-11">
          <img
            loading="lazy"
            srcSet="./img/avatars/9.png"
            className="shrink-0 self-stretch w-9 aspect-square rounded-full"
          />
          <div className="self-stretch my-auto text-sm font-bold leading-5 text-zinc-700">
            Deborah Chu
          </div>
          <div className="flex-auto self-stretch my-auto text-xs leading-5 text-zinc-400">
            1:12 PM
          </div>
        </div>
        <div className="justify-center items-start self-end px-3 pt-5 pb-9 max-w-full text-sm leading-5 bg-gray-50 rounded text-zinc-900 w-[334px]">
          Hello, What are you doing now?
        </div>
        <div className="flex gap-2.5 items-center mt-6">
          <img
            loading="lazy"
            srcSet="./img/avatars/6.png"
            className="shrink-0 self-stretch w-9 aspect-square rounded-full"
          />
          <div className="self-stretch my-auto text-sm font-bold leading-5 text-zinc-700">
            Jordan Nieves
          </div>
          <div className="flex-auto self-stretch my-auto text-xs leading-5 text-zinc-400">
            1:12 PM
          </div>
        </div>
        <div className="justify-center items-start self-end px-3 pt-5 pb-9 max-w-full text-sm leading-5 bg-gray-50 rounded text-zinc-900 w-[334px]">
          Hello, What are you doing now?
        </div>
        <div className="flex gap-2.5 items-center mt-6">
          <img
            loading="lazy"
            srcSet="./img/avatars/10.png"
            className="shrink-0 self-stretch w-9 aspect-square rounded-full"
          />
          <div className="flex-auto self-stretch my-auto text-sm font-bold leading-5 text-zinc-700">
            Benjamin Crawford
          </div>
          <div className="flex-auto self-stretch my-auto text-xs leading-5 text-zinc-400">
            1:12 PM
          </div>
        </div>
        <div className="justify-center self-start px-3 py-4 ml-14 text-lg leading-7 whitespace-nowrap bg-cyan-50 rounded text-zinc-900">
          🥰🥰🥰
        </div>
        <div className="flex gap-px px-px mt-12 text-base leading-7 text-neutral-300">
          <div className="flex flex-auto gap-5 justify-center items-start py-4 pr-10 pl-4 bg-gray-100 rounded">
            <div className="flex-auto my-auto">Add a comment</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a0b96202d3522c8063e9e64171f508775b584f9792ebb2c59d41890b6866050?"
              className="shrink-0 self-start w-5 aspect-square"
            />
          </div>
          <img
            loading="lazy"
            srcSet="./img/send.png"
            className="shrink-0 my-auto w-7 aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
