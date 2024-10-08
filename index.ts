enum StatusEnvio {
  Enviado = "ENVIADO",
  Entregue = "ENTREGUE",
}

type CPFType = string | number;

interface Pedido {
  idPedido: number;
  status?: StatusEnvio;
  valor: number;
}

interface Cliente {
  idCliente: number;
  nome: string;
  cpf: CPFType;
  pedidos: Pedido[];
}

const verificarStatus = (idCliente: number, idPedido: number) => {
  const clientesPedidos: Cliente[] = [
      {
          idCliente: 1,
          cpf: "11111111111",
          nome: "Munari",
          pedidos: [
              {
                  idPedido: 1,
                  status: StatusEnvio.Entregue,
                  valor: 150,
              },
              {
                  idPedido: 2,
                  status: StatusEnvio.Enviado,
                  valor: 544,
              },
              {
                  idPedido: 3,
                  valor: 200,
              },
          ],
      },
      {
          idCliente: 2,
          cpf: "22222222222",
          nome: "Levi",
          pedidos: [
              {
                  idPedido: 4,
                  status: StatusEnvio.Entregue,
                  valor: 22,
              },
              {
                  idPedido: 5,
                  status: StatusEnvio.Enviado,
                  valor: 80000,
              },
              {
                  idPedido: 6,
                  valor: 6500,
              },
          ],
      },
  ];

  const cliente = clientesPedidos.find(
      (cliente) => cliente.idCliente === idCliente
  );

  if (!cliente) {
      throw new Error(`O cliente #${idCliente} não existe.`)
  }

  const pedido = cliente.pedidos.find(
      (obj) => obj.idPedido === idPedido
  );

  if (!pedido) {
      throw new Error(
          `${cliente.nome}, o pedido #${idPedido} não foi encontrado.`
      );
  }

  if (!pedido.status) {
      throw new Error(
          `${cliente.nome}, o status do seu pedido #${idPedido} não consta em nossa base.`
      );
  }

  console.log(
      `${cliente.nome}, o status do seu pedido #${idPedido} é ${pedido?.status}`
  );
};