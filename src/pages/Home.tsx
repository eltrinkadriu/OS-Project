import { AppItem } from "@components/apps/AppItem";
import { Icon, IconDefinition } from "@components/shared/Icon/Icon";
import { apps } from "apps";
import { CurrentTime } from "@components/CurrentTime/CurrentTime";

export const Home = () => {
  return (
    <>
      <div className="h-6 bg-red-50 flex flex-row justify-between font-bold">
        <div className="ml-2">Preferences</div>
        <div className="flex">
          60% <Icon icon="battery-life" className="ml-3 mr-3 w-7" />
          <p className="mr-2">
            <CurrentTime />
          </p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        {apps.map((app) => (
          <AppItem
            key={app.id}
            id={app.id}
            title={app.title}
            icon={app.icon as IconDefinition}
            modalContent={app.modalContent}
          />
        ))}
      </div>
    </>
  );
};
