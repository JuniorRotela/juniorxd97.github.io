import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout title="Something Goes Wrong" footer={false}>
      <p className="text-center">
        {statusCode
          ? `Could not load your user data: Status code ${statusCode}`
          : "No se Pudo cargar Tu Pagina, sorry."}
      </p>
    </Layout>
  );
};

export default _error;
