implementation find_connection (etag)
  { for every item in connections of me => connection
      { synonym sender = connection.sender
          { when all
              {
                  sender.component is me
                  sender.etag == etag
              }
              { -> connection }
          }
      }
  }
  { check return "find_connection: connection not found for ${etag}" }

