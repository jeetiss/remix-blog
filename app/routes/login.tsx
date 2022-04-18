import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData, useSearchParams } from "@remix-run/react";

import { auth, sessionStorage } from "~/auth.server";

type LoaderData = {
  error: { message: string } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  await auth.isAuthenticated(request, { successRedirect: "/blog" });

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const error = session.get(auth.sessionErrorKey) as LoaderData["error"];
  return json<LoaderData>({ error });
};

export default function Screen() {
  const { error } = useLoaderData<LoaderData>();
  const [searchParams] = useSearchParams();

  return (
    <Form method="post" action="/auth/github">
      {error ? <div>{error.message}</div> : null}
      <input
        type="hidden"
        name="redirectTo"
        value={searchParams.get("redirectTo") ?? undefined}
      />
      <button>Sign In with GitHub</button>
    </Form>
  );
}
