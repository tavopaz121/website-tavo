import PublishForm from "../admin/PublishForm/PublishForm";
import { getPublishAction } from "../admin/actions/publish";

export const action = getPublishAction("create");

export default PublishForm({ mode: "create" });
